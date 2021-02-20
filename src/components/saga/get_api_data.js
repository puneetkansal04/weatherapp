import axios from "axios"
import { call, put } from "redux-saga/effects"
import { ADD_DATA } from "../redux/actions/action-types"

export default function* get_saga_api_data({ payload }) {
    const { latitude, longitude } = payload
    const response = yield call(() => axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=fb1cbe65fae34676f0e58deb99dd1a0e`))
    const dataList = response.data
    const dailyData = dataList.list.filter(item => {
        return item.dt_txt.includes("18:00:00")
    })

    yield put({ type: ADD_DATA, payloadData: { list: dailyData, city: dataList.city.name } })
}