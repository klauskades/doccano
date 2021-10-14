
import ApiPlatformService from '@/services/apiplatform.service'

class PlatformService {
  constructor() {
    this.request = ApiPlatformService
  }

  // getDagList() {
  //   let oauthUrl = '/flow/kaapna/api/getdags'
  //   //let oauthUrl = '/jsons/dag_list.json'
  //   return  this.request.get(oauthUrl)
  // }

  triggerDag(dagId, payload) {
    return new Promise((resolve, reject) => {
      const oauthUrl = '/flow/kaapna/api/trigger/' + dagId
      console.log(oauthUrl, payload)
      this.request.post(oauthUrl, payload).then((response) =>  {
        resolve(response.data)
      }).catch((error) => {
        console.log('Could not trigger the Dag', error)
        reject(error)
      })

    })
  }
}

export default new PlatformService()
