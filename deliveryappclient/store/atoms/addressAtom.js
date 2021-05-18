import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const adressState = atom({
    key: 'adressState',
        default: {
            city: '',
            neighborhood: '',
            street: '',
            number: '',
            complement: ''
        },
            effects_UNSTABLE: [persistAtom]
});

export default adressState;