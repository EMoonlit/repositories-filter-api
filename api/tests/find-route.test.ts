import axios, { AxiosResponse, AxiosPromise } from 'axios';
import request from 'supertest';
import app from '../src/app';

const responseMock = {
  data: [
    {
      id: 39843491,
      node_id: 'MDEwOlJlcG9zaXRvcnkzOTg0MzQ5MQ==',
      name: 'Xamarin-Forms-Labs',
      full_name: 'takenet/Xamarin-Forms-Labs',
      private: false,
      owner: [Object],
      html_url: 'https://github.com/takenet/Xamarin-Forms-Labs',
      description: 'Xamarin Forms Labs is a open source project that aims to provide a powerful and cross platform set of controls and helpers tailored to work with Xamarin Forms.',
      fork: true,
      url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs',
      forks_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/forks',
      keys_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/keys{/key_id}',
      collaborators_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/teams',
      hooks_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/hooks',
      issue_events_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/issues/events{/number}',
      events_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/events',
      assignees_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/assignees{/user}',
      branches_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/branches{/branch}',
      tags_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/tags',
      blobs_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/languages',
      stargazers_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/stargazers',
      contributors_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/contributors',
      subscribers_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/subscribers',
      subscription_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/subscription',
      commits_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/commits{/sha}',
      git_commits_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/git/commits{/sha}',
      comments_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/comments{/number}',
      issue_comment_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/issues/comments{/number}',
      contents_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/contents/{+path}',
      compare_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/merges',
      archive_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/downloads',
      issues_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/issues{/number}',
      pulls_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/pulls{/number}',
      milestones_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/milestones{/number}',
      notifications_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/labels{/name}',
      releases_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/releases{/id}',
      deployments_url: 'https://api.github.com/repos/takenet/Xamarin-Forms-Labs/deployments',
      created_at: '2015-07-28T15:51:55Z',
      updated_at: '2015-07-28T15:52:35Z',
      pushed_at: '2015-09-14T19:27:07Z',
      git_url: 'git://github.com/takenet/Xamarin-Forms-Labs.git',
      ssh_url: 'git@github.com:takenet/Xamarin-Forms-Labs.git',
      clone_url: 'https://github.com/takenet/Xamarin-Forms-Labs.git',
      svn_url: 'https://github.com/takenet/Xamarin-Forms-Labs',
      homepage: '',
      size: 98948,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'HTML',
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: [Object],
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
      permissions: [Object]
    },
  ],
}

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Find Route', () => {
  describe('GET /find', () => {
    test('Should return 200 on success', async () => {
      mockedAxios.get.mockResolvedValueOnce(responseMock);
      const response = await request(app)
        .get('/find')
        .query({ organization: 'test', lang: 'HTML' });

      console.log('response ', response.body);

    });
  });
});