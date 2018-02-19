/** 
 * Mock for the global store
*/
export const Console = {
    logSource: jest.fn(),
    commands: jest.fn(),
    logs: jest.fn(),
    timeMeasurement: jest.fn(),
    onLogAdded: jest.fn(),
    onMessagePrinted: jest.fn(),
    onConsoleCleared: jest.fn(),
    onSavingState:jest.fn(),
    onRestoringState:jest.fn(),
    init:jest.fn(),
    getState:jest.fn(),
    saveState: jest.fn(),
    restoreState:jest.fn(),
    addCommand:jest.fn(),
    executeCommand:jest.fn(),
    commandExists:jest.fn(),
    logDebug:jest.fn(),
    logInfo: jest.fn(),
    logWarn:jest.fn(),
    logError:jest.fn(),
    logDebugTimeStart:jest.fn(),
    logDebugTimeMeasurement:jest.fn(),
    logTodo:jest.fn(),
    log:jest.fn(),
    print:jest.fn(),
    clear:jest.fn(),
    dispose:jest.fn(),
}


