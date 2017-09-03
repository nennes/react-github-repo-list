export type Repo = {
  name: string,
  title: string,
  url: string,
  markdown: string,
  timestamp: string
};

export type GithubRepo = {
  "name": string,
  "html_url": string,
  "description": string,
  "updated_at": string
};
