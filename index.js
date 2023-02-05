// Code your solution here
function findMatching(drivers, string){
    const result = drivers.filter(checkDrivers)
    return result

    function checkDrivers(driver){
        return driver.toLowerCase() === string.toLowerCase()
    }
}



function fuzzyMatch(drivers, string){
    const fuzzyResult = drivers.filter(driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0)
    return fuzzyResult
}



function matchName(drivers, string){
    const matchedName = drivers.filter(driver => driver.name === string)
    console.log(matchedName)
    return matchedName
}