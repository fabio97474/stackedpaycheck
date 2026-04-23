export interface Post {
  slug: string
  title: string
  date: string
  summary: string
  categories: string[]
  content: string
}

export const posts: Post[] = [
  {
    slug: 'how-to-stop-living-paycheck-to-paycheck',
    title: 'How to Stop Living Paycheck to Paycheck: A Realistic 30-Day Plan',
    date: 'April 22, 2026',
    summary: 'Tired of running out of money before the month ends? This step-by-step plan shows you exactly how to break the cycle — starting today.',
    categories: ['Budgeting', 'Saving'],
    content: `
<h2>Why Most People Are Stuck</h2>
<p>Living paycheck to paycheck is not a sign of failure. It is a sign that nobody ever gave you a real system.</p>
<p>The standard advice — "spend less, save more" — is useless without a framework. This article gives you that framework.</p>
<h2>Step 1: Do a Money Audit (Day 1-3)</h2>
<p>Open your last three bank statements. Categorize every transaction into fixed essentials, variable essentials, and discretionary spending.</p>
<p>Most people find $100-$300 in subscriptions and recurring charges they forgot about. Cancel anything unused.</p>
<h2>Step 2: Set Your Numbers (Day 4-7)</h2>
<p>Use the 60/10/20/10 framework:</p>
<ul>
<li><strong>60%</strong> for fixed and variable essentials</li>
<li><strong>10%</strong> for wants and discretionary spending</li>
<li><strong>20%</strong> for debt repayment or savings</li>
<li><strong>10%</strong> for your emergency buffer</li>
</ul>
<h2>Step 3: Build Your First Buffer (Day 8-21)</h2>
<p>Before tackling debt or investing, build a $500-$1,000 emergency buffer. This stops you from using credit cards when something unexpected happens.</p>
<h2>Step 4: Automate Everything (Day 22-30)</h2>
<p>Set up automatic transfers on payday. When money moves automatically, you cannot accidentally spend it.</p>
<h2>The Result</h2>
<p>After 30 days you will have a clear picture of where your money goes, a working budget, a small emergency buffer, and automated savings.</p>
    `
  }
]
