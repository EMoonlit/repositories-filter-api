import axios from 'axios';

interface githubRepositories {
  id: number,
  node_id: string,
  name: string,
  full_name: string,
  private: false,
  owner: {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean
  },
  html_url: string
  description: string,
  fork: boolean,
  url: string,
  forks_url: string,
  keys_url: string,
  collaborators_url: string,
  created_at: Date,
  updated_at: Date,
  pushed_at: Date,
  git_url: string,
  ssh_url: string,
  clone_url: string,
  svn_url: string,
  homepage: string,
  size: number,
  language: string,
  has_issues: boolean,
  has_projects: boolean,
  has_downloads: boolean,
  has_wiki: boolean,
  has_pages: boolean,
  forks_count: number,
  mirror_url: string,
  archived: boolean,
  disabled: boolean,
  open_issues_count: number,
  license: {
    key: string,
    name: string,
    spdx_id: string,
    url: string,
    node_id: string,
  },
  allow_forking: boolean,
  is_template: boolean,
  visibility: string,
  forks: number,
  open_issues: number,
  watchers: number,
  default_branch: string,
  permissions: {
    admin: boolean,
    maintain: boolean,
    push: boolean,
    triage: boolean,
    pull: boolean
  }
}

export class Repository {


  constructor() {

  }

  public async requestRepositories(url: string, lang: string) {
    const repositories = await axios.get(url);
    console.log('repositories', repositories);

    return this.filterLanguage(lang, repositories.data);
  }

  private filterLanguage(lang: string, repos: githubRepositories[]) {
    return repos
      .filter(e => e.language === lang)
      .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
      .slice(0, 5)
      .map(e => ({
        id: e.id,
        name: e.name,
        lang: e.language,
        date: e.created_at
      })
      );
  }
}
