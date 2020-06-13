// The root folder for this documentation category is `pages/vmware`
//
// - A string refers to the name of a file
// - A "category" value refers to the name of a directory
// - All directories must have an "index.mdx" file to serve as
//   the landing page for the category, or a "name" property to
//   serve as the category title in the sidebar

export default [
  'index',
  { category: 'vs', content: ['cli-tools', 'docker', 'terraform'] },
  {
    category: 'getting-started',
    content: [
      'install',
      'project_setup',
      'boxes',
      'up',
      'synced_folders',
      'provisioning',
      'networking',
      'share',
      'teardown',
      'rebuild',
      'providers',
    ],
  },
]
