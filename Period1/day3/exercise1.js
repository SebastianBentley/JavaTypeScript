const crypto = require('crypto');
const fetch = require('node-fetch')

let size = 48;
//crypto.randomBytes(size, function (err, buffer) {
//    let secureHex = buffer.toString('hex');
//    console.log(secureHex)
//});

// a)
function noPromises() {
    const obj = {
        title: "6 Secure Randoms",
        randoms: []
    }
    crypto.randomBytes(48, (err, buffer) => {
        let secureHex1 = buffer.toString('hex');
        obj.randoms.push({ length: 48, random: secureHex1 })

        crypto.randomBytes(40, (err, buffer) => {
            let secureHex2 = buffer.toString('hex');
            obj.randoms.push({ length: 40, random: secureHex2 })

            crypto.randomBytes(32, (err, buffer) => {
                let secureHex3 = buffer.toString('hex');
                obj.randoms.push({ length: 32, random: secureHex3 })
                return (obj)

            });
        });
    })
}

function makeSecureRandom(size) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, (err, buffer) => {
            if (err) {
                reject(err)
            }
            let secureHex = buffer.toString('hex');
            resolve(secureHex)
        });
    })
}

function makeSecureParallel(numbers) {
    try {
        let promises = []
        numbers.forEach(num => {
            const sec = makeSecureRandom(num)
            promises.push(sec)
        });

        return Promise.all(promises)

    } catch (err) {
        console.log('An error occured:' + err)
    }
}

module.exports.getSecureRandoms = makeSecureParallel;