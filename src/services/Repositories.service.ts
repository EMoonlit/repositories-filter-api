import axios from 'axios';
import { githubRepositories } from '../interfaces/IRepository';

export class RequestRepositories {

  public async requestRepositories(url: string, lang: string) {
    const repositories = await axios.get(url);
    return this.filterLanguage(lang, repositories.data);
  }

  private filterLanguage(lang: string, repos: githubRepositories[]) {
    return repos
      .filter(e => e.language?.toLowerCase() === lang.toLowerCase())
      .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
      .slice(0, 5)
      .map(e => (
        {
          header: {
            type: "application/vnd.lime.media-link+json",
            value: {
              title: e.full_name,
              text: e.description,
              type: "image/jpeg",
              uri: e.owner.avatar_url
            }
          },
        })
      );
  }
}
