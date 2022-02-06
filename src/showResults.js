import { createPolicy } from '../src/actions/index';
import store from '../src/store';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export default (async function showReisults(values) {
    await sleep(500); // simulate server latency
    //window.alert(`You submitted:\n\n${JSON.stringify(values.name, null, 2)}`);
    var clientname = JSON.stringify(values.name, null, 2).replaceAll('"', '');
    console.log(clientname);
    store.dispatch(createPolicy(clientname, 100));
    console.log(store.getState('policies'));
});
