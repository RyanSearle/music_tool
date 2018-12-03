import { Tuning } from '../../instruments/guitar/tuning.model'
import { KeyUtilities } from '../../music/key.model'

const standardTuning = new Tuning('Standard', [
    KeyUtilities.createFromChar('G', 1),
    KeyUtilities.createFromChar('D', 1),
    KeyUtilities.createFromChar('A', 1),
    KeyUtilities.createFromChar('E', 0)
])


const Tunings = {
    standardTuning
}

export default Tunings;