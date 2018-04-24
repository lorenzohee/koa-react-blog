// import fetch from 'isomorphic-fetch'
// import vnstatDB from 'vnstat-dumpdb'
// const v = vnstatDB()
/**
 * @Description return server data
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-4-24 下午5:49
 * @Version 1.0.0
 **/
const v = {}

async function getDefaultNetInterface() {
  const config = await getVnstatConfig()
  return config.netInterface
}

async function getVnstatData(netInterface) {
  netInterface = netInterface || await getDefaultNetInterface()
  if (!netInterface) {
    return Promise.resolve({err: 'no net interface determined'})
  }
  return new Promise((resolve, reject) => {
    v.getStats(netInterface, (err, data) => {
      err && reject(err) || resolve(data)
    })
  })
}

function getVnstatConfig() {
  return new Promise((resolve, reject) => {
    v.getConfig((err, data) => {
      err && reject(err) || resolve({
        netInterface: data.Interface,
        updateInterval: data.UpdateInterval
      })
    })
  })
}

export default async (ctx, next) => {
  const returnData = {
    traffic: {
      days: [
          {date:{year: '2018', month: '01', day: "12"},
              tx: 248576,
              rx: 548576},
          {date:{year: '2018', month: '02', day: "12"},
              tx: 288576,
              rx: 448576},
          {date:{year: '2018', month: '03', day: "12"},
              tx: 178576,
              rx: 628576},
          {date:{year: '2018', month: '04', day: "12"},
              tx: 1985760,
              rx: 1485762},
          {date:{year: '2018', month: '05', day: "12"},
              tx: 338576,
              rx: 248576},
          {date:{year: '2018', month: '06', day: "12"},
              tx: 588576,
              rx: 238576},
          {date:{year: '2018', month: '07', day: "12"},
              tx: 318576,
              rx: 98576},
          {date:{year: '2018', month: '08', day: "12"},
              tx: 248576,
              rx: 438576},
          {date:{year: '2018', month: '09', day: "12"},
              tx: 1048576,
              rx: 1048576},
      ]
    }
  }
    // ctx.body = {
    //     state: 'success',
    //     data: await getVnstatData(),
    //     config: await getVnstatConfig()
    // }
    ctx.body = {
        state: 'success',
        data: returnData,
        config: {}
    }
}
