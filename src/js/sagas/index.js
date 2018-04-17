import getAchieversDataSaga from './getAchieversDataSaga';
import getCalenderDataSaga from './getCalenderDataSaga';
import initialBlogViewSaga from './initialBlogViewSaga';
import nextBlogViewSaga from './nextBlogViewSaga';
import previousBlogViewSaga from './previousBlogViewSaga';
import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import * as types from '../constants';

function* watchAchieversDataSaga() {
	yield takeLatest(types.GET_ACHIEVERS_DATA, getAchieversDataSaga);
}
function* watchCalenderDataSaga() {
	yield takeLatest(types.GET_CALENDER_DATA, getCalenderDataSaga);
}
function* watchinitialBlogViewSaga() {
	yield takeLatest(types.INITIAL_BLOG_VIEW, initialBlogViewSaga);
	console.log('watching');
}
function* watchNextBlogViewSaga() {
	yield takeLatest(types.NEXT_VIEW_SAGA, nextBlogViewSaga);
	console.log('watching');
}
function* watchPreviousBlogViewSaga() {
	yield takeLatest(types.PREVIOUS_VIEW_SAGA, previousBlogViewSaga);
	console.log('watching');
}
export default function* rootSaga() {
	yield all([
		watchAchieversDataSaga(),
		watchCalenderDataSaga(),
		watchinitialBlogViewSaga(),
		watchNextBlogViewSaga(),
		watchPreviousBlogViewSaga()
	]);
}
