import PlatformService from '@/services/platform.service'

export const state = () => ({
    // dags: [],
    // actionItems: []
})

// export const getters = {
//     allDags(state) {
//         return state.dags
//     },
//     allActionItems(state) {
//         return state.actionItems
//     }
// }

// export const mutations = {
//     setDagList(state, payload) {
//         state.dags = payload
//         for (const key in payload){
//           state.actionItems.push({'title': payload[key].dag_id, 'params': {dagId: payload[key].dag_id}})
//         }

//     }
// }

export const actions = {
//   getDagList({ commit, state }) {
//     return PlatformService.getDagList()
//       .then((response) => {
//           console.log('returning dag list')
//           console.log(response)
//         commit('setDagList', response.data)
//         // commit('setTotalItems', response.data.count)
//       })
//       .catch((error) => {
//         alert(error)
//       })
//   },
  triggerDag({ commit, state }, payload) {
    console.log(payload)
    PlatformService.triggerDag(payload.dagId, payload.params)
      .then((response) => {
            console.log('triggered', response.data)
      })
      .catch((error) => {
        alert(error)
      })
  }
}

