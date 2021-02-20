import { takeLatest } from "redux-saga/effects";
import { GET_API_DATA } from "../redux/actions/action-types";
import get_saga_api_data from './get_api_data';

export default function* apiFunctions() {
    yield takeLatest(GET_API_DATA, get_saga_api_data)
}