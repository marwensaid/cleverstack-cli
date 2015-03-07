exports.tap = [
  '  Usage: clever-init \\[options\\] \\[command\\]',
  '',
  '',
  '  Commands:',
  '',
  '    <project>   creates a new project named <project>',
  '',
  '  Options:',
  '',
  '    -h, --help             output usage information',
  '    -f, --force            delete existing projects in your current directory.*',
  '    -v, --verbose          verbose output useful for debugging',
  '    -A, --allow-root       allow root for bower',
  '    -S, --skip-protractor  skips installing protractor \\(Frontend only\\)',
  '    -B, --bootstrap        will run \\`grunt bootstrap build\\` as part of the setup',
  '    -V, --version          output the version number',
  '',
  '  Examples:',
  '',
  '    clever init my-project                      install the backend and frontend',
  '    clever init my-project clever-auth          with the clever-auth module',
  '    clever init my-project backend frontend     verbose way of running \\"clever init my-project\\"',
  '    clever init my-project frontend             only install the frontend',
  '    clever init my-project backend clever-auth  install the clever-auth module after installing the backend and frontend seeds',
  '',
  '    Installing specific versions:',
  '',
  '      clever init my-project backend\\@<version>',
  '      clever init my-project clever-auth\\@<version>'
];
