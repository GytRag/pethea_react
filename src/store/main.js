import {create} from "zustand";

const useStore = create((set) => ({
    medication: null,
    petList: null,
    loggedInDoctor: null,
    loggedInPatient: null,
    clickedPage: "About",

    updateMedication: (medic) => set({medication: medic}),
    updatePets: (pet) => set({petList: pet}),
    setLoggedInDoctor: (doctor) => set({loggedInDoctor: doctor}),
    setLoggedInPatient: (patient) => set({loggedInPatient: patient}),
    setClickedPage: (page) => set({clickedPage: page})
}))

export default useStore;