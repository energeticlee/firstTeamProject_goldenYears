const calculateJointAngle = (start, mid, end, confidenceScore) => {
    if (start.score > confidenceScore && mid.score > confidenceScore && end.score > confidenceScore) {
        let rad = Math.atan2((end.y - mid.y), (end.x - mid.x)) - Math.atan2((start.y - mid.y), (start.x - mid.x))
        const angle = Math.round(Math.abs(rad * 57.2958))

        return angle
    }
}


export default calculateJointAngle