

function superbowlWin(record) {
    const findWin = record.find(element =>
        element.result === "W" )
        return !!findWin ? findWin.year : undefined
    }
