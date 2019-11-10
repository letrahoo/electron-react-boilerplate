module.exports = {
  hooks: {
    generateAssets: require('./tools/generateAssets')
  },
  packagerConfig: {
    name: 'Electron Demo',
    executableName: 'electron-demo',
    asar: true,
    // icon: path.resolve(__dirname, 'assets', 'icons', 'fiddle'),
    // TODO: FIXME?
    // ignore: [
    //   /^\/\.vscode\//,
    //   /^\/tools\//
    // ],
    // appBundleId: 'com.electron.fiddle',
    // appCategoryType: 'public.app-category.developer-tools',
    protocols: [{
      name: 'Electron Demo Launch Protocol',
      schemes: ['electron-demo']
    }],
    win32metadata: {
      CompanyName: 'Electron Community',
      OriginalFilename: 'Electron Fiddle',
    },
    osxSign: {
      identity: 'Developer ID Application: Felix Rieseberg (LT94ZKYDCJ)'
    }
  },
  makers: [
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin']
    },
  ],
};
