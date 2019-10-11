const program = require("commander");
const chalk = require("chalk");
const inquirer = require("inquirer");

program
  .version("0.0.1")
  .option("-C, --chdir <path>", "change the working directory")
  .option("-c, --config <path>", "set config path. defaults to ./deploy.conf")
  .option("-T, --no-tests", "ignore test hook");

program
  .command("init")
  .alias("i")
  .description("run remote setup commands")
  .action(function() {
    console.log(chalk.red("开启前端工程化之路"));

    const prompts = [
      {
        type: "list",
        name: "type",
        message: "请选择项目类型：",
        pageSize: 4,
        choices: [
          { name: "Web端项目", value: "web" },
          { name: "PC端项目", value: "pc" },
          { name: "Demo项目", value: "demo" },
          { name: "Blank项目", value: "blank" },
          { name: "Test项目", value: "test" },
          { name: "Mobile端项目", value: "mobile" }
        ]
      }
    ];
    inquirer.prompt(prompts).then(answers => {
      console.log("Hello, world", answers);
      console.log(chalk.green("收工咯"));
      console.log(chalk.blue("收工咯"));
      console.log(chalk.blue.bgRed("收工咯")); //支持设置背景
      console.log(chalk.blue(JSON.stringify(answers)));
    });
  });

// program
//   .command("exec <cmd>")
//   .description("run the given remote command")
//   .action(function(cmd) {
//     console.log('exec "%s"', cmd);
//   });

// program
//   .command("teardown <dir> [otherDirs...]")
//   .description("run teardown commands")
//   .action(function(dir, otherDirs) {
//     console.log('dir "%s"', dir);
//     if (otherDirs) {
//       otherDirs.forEach(function(oDir) {
//         console.log('dir "%s"', oDir);
//       });
//     }
//   });

// program
//   .command("*")
//   .description("deploy the given env")
//   .action(function(env) {
//     console.log('deploying "%s"', env);
//   });

program.parse(process.argv);
