// ECMAScript
console.log(`
██░ ██  █     █░ ██▓▓█████▄ 
▓██░ ██▒▓█░ █ ░█░▓██▒▒██▀ ██▌
▒██▀▀██░▒█░ █ ░█ ▒██▒░██   █▌
░▓█ ░██ ░█░ █ ░█ ░██░░▓█▄   ▌
░▓█▒░██▓░░██▒██▓ ░██░░▒████▓ 
 ▒ ░░▒░▒░ ▓░▒ ▒  ░▓   ▒▒▓  ▒ 
 ▒ ░▒░ ░  ▒ ░ ░   ▒ ░ ░ ▒  ▒ 
 ░  ░░ ░  ░   ░   ▒ ░ ░ ░  ░ 
 ░  ░  ░    ░     ░     ░    
                      ░      
`)
import { getHWID } from 'hwid'

// Promises
getHWID().then(id => {
    console.log('HWID:')
    console.log(id)
  })
  
  // async/await
  async function main() {
    const id = await getHWID()
    // use ID however you want
}

setTimeout(()=>{
    // Waiting
})