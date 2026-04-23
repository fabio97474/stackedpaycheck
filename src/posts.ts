export interface Post {
  slug: string
  title: string
  date: string
  summary: string
  categories: string[]
  content: string
  image?: string
  published: boolean
}

// Fetch posts from GitHub API
export async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/fabio97474/stackedpaycheck/contents/content/posts',
      { headers: { 'Accept': 'application/vnd.github+json' } }
    )
    if (!response.ok) return getStaticPosts()
    
    const files = await response.json()
    const posts: Post[] = []
    
    for (const file of files) {
      if (!file.name.endsWith('.md')) continue
      const fileRes = await fetch(file.download_url)
      const text = await fileRes.text()
      const post = parseMarkdown(text)
      if (post && post.published !== false) posts.push(post)
    }
    
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch {
    return getStaticPosts()
  }
}

function parseMarkdown(text: string): Post | null {
  const frontmatterMatch = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!frontmatterMatch) return null
  
  const frontmatter = frontmatterMatch[1]
  const content = frontmatterMatch[2].trim()
  
  const get = (key: string) => {
    const match = frontmatter.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?$`, 'm'))
    return match ? match[1].trim() : ''
  }
  
  const categoriesMatch = frontmatter.match(/^categories:\s*\[([^\]]*)\]/m)
  const categories = categoriesMatch 
    ? categoriesMatch[1].split(',').map(c => c.trim().replace(/['"]/g, ''))
    : ['Budgeting']

  return {
    slug: get('slug') || '',
    title: get('title') || '',
    date: formatDate(get('date')),
    summary: get('summary') || '',
    categories,
    content: markdownToHtml(content),
    image: get('image') || undefined,
    published: get('published') !== 'false'
  }
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch {
    return dateStr
  }
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|u|l])/gm, '')
    .split('\n').map(line => 
      line.match(/^<(h[1-6]|ul|li)/) ? line : (line ? `<p>${line}</p>` : '')
    ).join('\n')
}

function getStaticPosts(): Post[] {
  return [
    {
      slug: 'how-to-stop-living-paycheck-to-paycheck',
      title: 'How to Stop Living Paycheck to Paycheck: A Realistic 30-Day Plan',
      date: 'April 22, 2026',
      summary: 'Tired of running out of money before the month ends? This step-by-step plan shows you exactly how to break the cycle — starting today.',
      categories: ['Budgeting', 'Saving'],
      content: '<h2>Why Most People Are Stuck</h2><p>Living paycheck to paycheck is not a sign of failure. It is a sign that nobody ever gave you a real system.</p><h2>Step 1: Do a Money Audit</h2><p>Open your last three bank statements and categorize every transaction. Most people find $100-$300 in forgotten subscriptions.</p><h2>Step 2: The 60/10/20/10 Framework</h2><p><strong>60%</strong> for essentials, <strong>10%</strong> for wants, <strong>20%</strong> for savings/debt, <strong>10%</strong> for emergency buffer.</p><h2>Step 3: Build Your First Buffer</h2><p>Before tackling debt or investing, build a $500-$1,000 emergency buffer to stop using credit cards when surprises hit.</p>',
      published: true
    }
  ]
}
