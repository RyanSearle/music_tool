import { Tuning } from '../../instruments/guitar/tuning.model'
import { KeyUtilities } from '../../music/key.model'

const standardTuning = new Tuning('Standard', [
    KeyUtilities.createFromChar('E', 2),
    KeyUtilities.createFromChar('B', 2),
    KeyUtilities.createFromChar('G', 1),
    KeyUtilities.createFromChar('D', 1),
    KeyUtilities.createFromChar('A', 1),
    KeyUtilities.createFromChar('E', 0)
])

const cTuning = new Tuning('C', [
    KeyUtilities.createFromChar('C', 2),
    KeyUtilities.createFromChar('G', 1),
    KeyUtilities.createFromChar('D#', 1),
    KeyUtilities.createFromChar('A#', 1),
    KeyUtilities.createFromChar('F', 0),
    KeyUtilities.createFromChar('C', 0)
])

const dropDTuning = new Tuning('Drop D', [
    KeyUtilities.createFromChar('E', 2),
    KeyUtilities.createFromChar('B', 2),
    KeyUtilities.createFromChar('G', 1),
    KeyUtilities.createFromChar('D', 1),
    KeyUtilities.createFromChar('A', 1),
    KeyUtilities.createFromChar('D', 0)
])

const Tunings = {
    standardTuning,
    cTuning,
    dropDTuning
}

export default Tunings;