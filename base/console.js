//example to start
//node console.js message=hello spec

function consoleTOJson() {
    const c = {}

    for (let i = 2; i < process.argv.length; i++) {
        const arg = process.argv[i].split('=')
        c[arg[0]] = arg[1] ? arg[1] : true
    }

    return c
}


console.log(consoleTOJson())
