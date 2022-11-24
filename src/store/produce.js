import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

export default function produceReducer (state = {}, action) {
    switch (action.type) {
        case POPULATE:
            let newState = {};
            action.produce.forEach(produce => {
                    newState[produce.id] = produce;
                });
            return newState;
        default:
            return state;
    }
}

export function populateProduce () {
    return ({type: POPULATE, produce: produceData});
}