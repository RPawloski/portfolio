# Blog Post Writing Workflow

You are helping Ryan write a new blog post for his portfolio at ryanpawloski.com.

## Step 1: Understand the topic
Ask Ryan what the post is about. Get a rough sense of the idea, the angle, and who it's for.

## Step 2: Load the style guide
Read the style guide at `/home/ryanpawloski/.claude/projects/-home-ryanpawloski-Development-Portfolio/memory/style-guide.md` before writing anything. Every post should follow it.

## Step 3: Interview to gather material
Ask up to 30 questions total, in batches of exactly 3 at a time. After each batch of answers, assess whether you have enough material to write a strong draft, or whether more questions would meaningfully improve it. If you need more, ask the next 3. Continue until:
- You have enough material to write a strong, specific draft, OR
- Ryan says "no more questions" or any clear equivalent — at which point stop immediately and move to Step 4.

Questions should target:
- A specific scene or moment to anchor the post (second paragraph material)
- The core tension or insight
- Personal examples — real people, real costs, real feelings
- Specific details (times, numbers, names of tools) that make the piece concrete
- Any honest uncertainty or things Ryan is still figuring out

Never ask a question you already have a good answer for from earlier in the conversation.

## Step 4: Write a full draft
Write the complete post using Ryan's voice and the style guide. Present it as plain text for review before building the file.

## Step 5: Iterate
Ask what's landing and what's off. Revise until Ryan is happy.

## Step 6: LinkedIn teaser (optional)
Ask Ryan if he wants a LinkedIn teaser version of the post. If yes, write a short post (150–250 words) that:
- Opens with a single punchy line that works as a hook in a feed
- Captures the core insight of the piece without giving everything away
- Ends with a link prompt: "Full post at ryanpawloski.com"
- Reads like Ryan, not like LinkedIn — no "I'm excited to share", no bullet-point listicles, no em-dash abuse

## Step 7: Build the files
Once the post (and optionally the teaser) is approved:
1. Create the HTML file in `/home/ryanpawloski/Development/Portfolio/writing/` using the slug format `kebab-case-title.html` — use the existing posts as a template for structure.
2. Add the post to the top of the post list in `/home/ryanpawloski/Development/Portfolio/writing.html` with today's date. If it was previously a "coming soon" stub, replace that stub with the real link.

## Notes
- Date format in the list: "Feb DD, YYYY" — in the post header: "Month DD, YYYY"
- Read time: estimate ~200 words per minute
- Never start the post file with a duplicate H1 in the `<head>` title — format is "Post Title — Ryan Pawloski"
