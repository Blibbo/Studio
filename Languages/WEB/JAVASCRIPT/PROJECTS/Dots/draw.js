function spawnNode(x, y){
    nodeCount++

    var newNode = document.createElement('div') 
    document.getElementById('board').appendChild(newNode)
    newNode.style.position = 'absolute'
    let nodeX = x - size/2
    let nodeY = y - size/2

    newNode.style.left = nodeX + 'px'
    newNode.style.top = nodeY + 'px'
    
    newNode.style.backgroundPosition = (-nodeX) + 'px' + ' ' + (-nodeY) + 'px'
    newNode.style.backgroundSize = '100vw 100vh'
    newNode.id = nodeCount

    newNode.style.width = size+'px'
    newNode.style.height = size+'px'

    //display nodes
    newNode.style.backgroundImage = `url(${Media.currentImage()})`
    newNode.className = 'image rounded-full'
    if(!showJoints){
        newNode.style.display = 'none'
    }


    if(joinPrevious){
        let previousNode = document.getElementById((nodeCount-1).toString())
        join(previousNode, newNode)
    }
    joinPrevious = true
}

function join(node1, node2){//PLEASE MAKE A "drawRectangle" FUNCTION
    //create rectangle
    let rectangle = document.createElement('div')
    rectangle.id = node1.id + '-' + node2.id

    const x1 = ~~node1.style.left.split('px')[0] + ~~node1.style.width.split('px')[0]/2
    const y1 = ~~node1.style.top.split('px')[0] + ~~node1.style.height.split('px')[0]/2
    const x2 = ~~node2.style.left.split('px')[0] + ~~node2.style.width.split('px')[0]/2
    const y2 = ~~node2.style.top.split('px')[0] + ~~node2.style.height.split('px')[0]/2
    const width = distance({x: x1, y: y1},{x: x2, y: y2})
    const height = ~~node1.style.height.split('px')[0]
    rectangle.style.height = height + 'px'
    rectangle.style.width = width + 'px'
    rectangle.className = 'absolute flex justify-center items-center overflow-hidden'

    //position rectangle
    const centerX = (x1+x2)/2
    const centerY = (y1+y2)/2
    const x = centerX-width/2
    const y = centerY-height/2
    rectangle.style.left = x + 'px'
    rectangle.style.top = y + 'px'

    //create image div
    let imageDiv = document.createElement('div')
    const largestRectangleDimension = Math.max(width, height)
    const imageWidth = largestRectangleDimension * 1.5
    const imageHeight = largestRectangleDimension* 1.5

    //rotate everything correctly
    const angle = pointsToAngle({x: x1, y: y1}, {x: x2, y: y2})
    rectangle.style.transform = `rotate(${angle}deg)`
    imageDiv.style.transform = `rotate(${-angle}deg)`


    //image
    imageDiv.className = 'image'
    imageDiv.style.backgroundImage = `url(${Media.currentImage()})`
    imageDiv.style.backgroundSize = '100vw 100vh'
    const imageX = centerX - imageWidth/2
    const imageY = centerY - imageHeight/2
    imageDiv.style.backgroundPosition = (-imageX) + 'px' + ' ' + (-imageY) + 'px'


    //image div size
    imageDiv.style.minWidth = imageWidth + 'px'
    imageDiv.style.minHeight = imageHeight + 'px'

    //hide if necessary
    if(!showUnions){
        rectangle.style.display = 'none'
    }

    //add to document
    document.getElementById('board').appendChild(rectangle)
    rectangle.appendChild(imageDiv)
    
}

function toggleJointsOrUnions(areUnions){
    let board = document.getElementById('board')

    for(var i=0; i<board.children.length; i++){
        let currentChild = board.children[i]
        let isAnUnion = currentChild.id.includes('-')

        if(areUnions? isAnUnion : !isAnUnion){
            if(areUnions? showUnions : showJoints){
                currentChild.style.display = areUnions? 'flex' : 'block'
            }else{
                currentChild.style.display = 'none'
            }
        }
    }
}

function strokeStart(x, y, mouseTriggered){
    if(isStroking){
        strokeEnd()
    }

    joinPrevious = false
    isStroking = true
    strokeCount++

    let media = strokeCount>1? Media.next() : Media.current()
    Media.playAudio(media.audio)

    spawnNode(x, y)

    //remove sidebar events while mouse is down
    if(mouseTriggered){
        let sideBar = document.getElementById("side-bar")
        sideBar.classList.remove('pointer-events-auto')
    }
}

function strokeEnd(mouseTriggered){
    joinPrevious = false
    isStroking = false
    generatingNodes = false

    Media.stopAllAudio()

    //add events to the sidebar again
    if(mouseTriggered){
        let sideBar = document.getElementById("side-bar")
        sideBar.classList.add('pointer-events-auto')
    }
}

function eraseBoard(){
    //strokeEnd()

    let i=1, currentNode
    
    while(currentNode = document.getElementById(i)){
        //find node -> remove node
        currentNode.remove()
        
        //find join block -> remove join block
        let joinBlock = document.getElementById(i-1 + '-' + i)
        if(joinBlock) joinBlock.remove()

        //increment counter
        i++
    }
    nodeCount = 0
}

function debugLine(p1, p2, addToClassName, lineThickness, zIndex, parent){
    //initialize parameters
    lineThickness = lineThickness || 1
    addToClassName = addToClassName || 'bg-black'
    parent = parent || document.getElementById('board')

    //create line
    let line = document.createElement('div')
    line.className = 'absolute bg-black debug'

    //set width and height
    let lineWidth = distance(p1, p2)
    let lineHeight = lineThickness
    line.style.width = lineWidth + 'px'
    line.style.height = lineHeight + 'px'

    //position line
    const centerPoint = middlePoint(p1, p2)
    let x = centerPoint.x - lineWidth/2
    let y = centerPoint.y - lineHeight/2
    line.style.left = x + 'px'
    line.style.top = y + 'px'

    //rotate line
    line.style.transformOrigin = 'center'
    line.style.transform = 'rotate(' + pointsToAngle(p1, p2) + 'deg)'
    
    //push classes from className
    line.className = line.className + ' ' + addToClassName

    //set z index
    if(zIndex){
        line.style.zIndex = zIndex
    }

    //append to board
    parent.appendChild(line)

    return line
}

function debugCoordinates(x,y, addToClassName, dotDimension, zIndex, parent){
    //initialize parameters
    dotDimension = dotDimension || 10
    addToClassName = addToClassName || 'bg-black'
    parent = parent || document.getElementById('board')

    //create dot
    let dot = document.createElement('div')
    dot.className = 'absolute rounded-full debug'

    //set size
    dot.style.width = dotDimension + 'px'
    dot.style.height = dotDimension + 'px'
    
    //set position
    dot.style.left = x - dotDimension/2 + 'px'
    dot.style.top = y - dotDimension/2 + 'px'

    //push classes from className
    dot.className = dot.className + ' ' + addToClassName

    //add z index from parameters
    if(zIndex){
        dot.style.zIndex = zIndex
    }

    //append to parent
    parent.appendChild(dot)

    return dot
}

function debugPoint(point, addToClassName, dotDimension, zIndex, parent){
    return debugCoordinates(point.x, point.y, addToClassName, dotDimension, zIndex, parent)
}

function debugShape(pointsArray, addToClassName, lineThickness, zIndex, parent){
    for(let i=0;i<pointsArray.length;i++){
        secondIndex = i==pointsArray.length-1? 0 : i+1
        debugLine(pointsArray[i], pointsArray[secondIndex], addToClassName, lineThickness, zIndex, parent)
    }
}

function debugRectangle(vertices, addToClassName, parent){
    //initialize parameters
    addToClassName = addToClassName || 'bg-black'
    parent = parent || document.getElementById('board')

    //find info
    let firstVertex = vertices[0]
    let secondVertex = vertices[1]
    let height = vertices[2].y-secondVertex.y

    //create the rectangle
    let rectangle = document.createElement('div')
    rectangle.className = 'absolute debug'

    //rotate it
    let slope = pointsToAngle(firstVertex, secondVertex)
    rectangle.style.transformOrigin = 'top left'
    rectangle.style.transform = 'rotate(' + slope + 'deg)'
    
    //set rectangle width and height
    let width = distance(firstVertex, secondVertex)
    rectangle.style.width = width + 'px'
    rectangle.style.height = height + 'px'

    //set position to first vertex
    rectangle.style.left = firstVertex.x + 'px'
    rectangle.style.top = firstVertex.y + 'px'

    //push classes from className
    rectangle.className = rectangle.className + ' ' + addToClassName

    //append to parent
    parent.appendChild(rectangle)

    return rectangle
}

function verticalLineAtX(x, addToClassName, sizeMultiplier, zIndex){
    return debugLine(
        {x: x, y: 0},
        {x: x, y: window.innerHeight},
        addToClassName, sizeMultiplier, zIndex    
    )
}

function horizontalLineAtY(y, addToClassName, sizeMultiplier, zIndex){
    return debugLine(
        {x: 0, y: y},
        {x: window.innerWidth, y: y},
        addToClassName, sizeMultiplier, zIndex    
    )
}

function drawShape(pointsArray, image, parent, zIndex){
    let previousRectangle = null,
        rectangleAbsolutePlanes = []

    for(let i=0;i<pointsArray.length;i++){
        let p2Index = i == pointsArray.length-1? 0 : i+1
        let point1 = pointsArray[i]
        let point2 = pointsArray[p2Index]

        //calculate the rectangle's width and height
            /*
                rotate the shape so that the first segment is parallel to the
                x axis and the second vertex is to the right of the first
            */
        let segmentSlope = pointsToAngle(
            {x: point1.x, y: point1.y},
            {x: point2.x, y: point2.y}
        )
        let rotatedPointsArray = rotatePoints(pointsArray, point1, -segmentSlope)

            //find the limits of this rectangle
        let minX = point1.x,
            maxX = point1.x,
            maxY = point1.y,
            minY = point1.y;

        for(let j=0;j<rotatedPointsArray.length;j++){
            let currentPoint = rotatedPointsArray[j]
            
            if(minX>currentPoint.x) minX = currentPoint.x
            if(maxX<currentPoint.x) maxX = currentPoint.x
            if(maxY<currentPoint.y) maxY = currentPoint.y
            if(minY>currentPoint.y) minY = currentPoint.y
        }

        let rectWidth = maxX-minX
        let rectHeight = maxY-minY
        
        //ROTATED RECTANGLE VERTICES (edges parallel to x and y axis)
        let topLeftRotated = {x: minX, y: minY}
        let topRightRotated = {x: maxX, y: minY}
        let bottomRightRotated = {x: maxX, y: maxY}
        let bottomLeftRotated = {x: minX, y: maxY}

        let rotatedRectangleVertices = [
            topLeftRotated,
            topRightRotated,
            bottomRightRotated,
            bottomLeftRotated    
        ]

        //RECTANGLE VERTICES
        let rectangleVertices = rotatePoints(rotatedRectangleVertices, point1, segmentSlope)
        let firstVertex = rectangleVertices[0]
        let secondVertex = rectangleVertices[1]

        //get the rectangle's slope from the vertices
        let rectangleSlope = pointsToAngle(firstVertex, secondVertex)

        //create the rectangle
        let rectangle = document.createElement('div')
        rectangle.className = 'absolute overflow-hidden'
        if(zIndex && i==0) rectangle.style.zIndex = zIndex
        
        //set rectangle width and height
        rectangle.style.width = rectWidth + 'px'
        rectangle.style.height = rectHeight + 'px'

        //translate coordinates through the absolute planes
        let rectangleToAbsolute = toAbsolute(rectangleAbsolutePlanes, {
            x: firstVertex.x,
            y: firstVertex.y,
            rotation: rectangleSlope
        })

        let posLeft = rectangleToAbsolute.x
        let posTop = rectangleToAbsolute.y
        let rotation = rectangleToAbsolute.rotation
        
        rectangleAbsolutePlanes.push(rectangleToAbsolute)
        rectangle.style.left = posLeft + 'px'
        rectangle.style.top = posTop + 'px'

        //set rectangle rotation
        rectangle.style.transformOrigin = 'top left'
        rectangle.style.transform = 'rotate(' + rotation + 'deg)'

        //append to parent. Either the previous rectangle or (if first iteration) the board
        parent = previousRectangle || parent || document.getElementById('board')
        parent.appendChild(rectangle)

        //make this the next parent
        previousRectangle = rectangle
    }
    //IMAGE DIV SECTION:
    //find vertices
    let minX = pointsArray[0].x,
        maxX = pointsArray[0].x,
        maxY = pointsArray[0].y,
        minY = pointsArray[0].y;

    for(let j=0;j<pointsArray.length;j++){
        let currentPoint = pointsArray[j]
        
        if(minX>currentPoint.x) minX = currentPoint.x
        if(maxX<currentPoint.x) maxX = currentPoint.x
        if(maxY<currentPoint.y) maxY = currentPoint.y
        if(minY>currentPoint.y) minY = currentPoint.y
    }
    let imageDivVertices = [
        {x: minX, y: minY},
        {x: maxX, y: minY},
        {x: maxX, y: maxY},
        {x: minX, y: maxY}
    ]

    //create image div
    let imageDiv = document.createElement('div')
    imageDiv.className = 'image absolute'
    imageDiv.style.backgroundImage = `url(${image || Media.currentImage()})`
    imageDiv.style.backgroundSize = '100vw 100vh'

    //find size
    let imageDivHeight = maxY-minY
    let imageDivWidth = maxX-minX
    imageDiv.style.width = imageDivWidth + 'px'
    imageDiv.style.height = imageDivHeight + 'px'

    //position image
    imageDiv.style.backgroundPosition = (-imageDivVertices[0].x) + 'px' + ' ' + (-imageDivVertices[0].y) + 'px'

    //position div
    let imageDivToAbsolute = toAbsolute(rectangleAbsolutePlanes, {
        x: imageDivVertices[0].x,
        y: imageDivVertices[0].y,
        rotation: 0
    })

    imageDiv.style.left = imageDivToAbsolute.x + 'px'
    imageDiv.style.top = imageDivToAbsolute.y + 'px'

    //rotate div
    imageDiv.style.transformOrigin = 'top left'
    imageDiv.style.transform = 'rotate(' + imageDivToAbsolute.rotation + 'deg)'

    //debugShape(imageDivVertices, 'bg-blue-500', .5)
    //debugShape(pointsArray, 'bg-red-500', .25)

    //append to parent
    previousRectangle.appendChild(imageDiv)

    return imageDiv
}

function testFunction(point1, point2, totalDeltaArray){
    $(document).ready(function(){
        let projectionMatrix = [
            [1, 0, 0],
            [0, 1, 0]
        ]

        let body = $('body')[0]

        body.innerHTML = ''

        let deltaX = 0, deltaY = 0
        if(point1 && point2){
            deltaX = point2.x - point1.x
            deltaY = point2.y - point1.y
        }

        if(!totalDeltaArray){
            totalDeltaArray = [deltaX, deltaY]
        }else{
            totalDeltaArray[0]+=deltaX
            totalDeltaArray[1]+=deltaY
        }

        deltaX = totalDeltaArray[0]
        deltaY = -totalDeltaArray[1]

        //make a rotation matrix
        let rotationMatrixX = [
            [1, 0, 0],
            [0, Math.cos(degreesToRadians(deltaY)), Math.sin(degreesToRadians(deltaY))],
            [0, -Math.sin(degreesToRadians(deltaY)), Math.cos(degreesToRadians(deltaY))]
        ]
        let rotationMatrixY = [
            [Math.cos(degreesToRadians(deltaX)), 0, -Math.sin(degreesToRadians(deltaX))],
            [0, 1, 0],
            [Math.sin(degreesToRadians(deltaX)), 0, Math.cos(degreesToRadians(deltaX))]
        ]
        let orientationMatrix = matrixMultiply(rotationMatrixX, rotationMatrixY)


        let rH = 500
        let rW = 500
        let rD = 500
        let c = {x: window.innerWidth/2, y: window.innerHeight/2}
        orientationMatrix[3] = [c.x, c.y, 0]
        c = {x: 0, y: 0, z: 0}

        let front = [
            {x: c.x - rW/2, y: c.y - rH/2, z: c.z+rD/2},
            {x: c.x + rW/2, y: c.y - rH/2, z: c.z+rD/2},
            {x: c.x + rW/2, y: c.y + rH/2, z: c.z+rD/2},
            {x: c.x - rW/2, y: c.y + rH/2, z: c.z+rD/2}
        ]
        let left = [
            {x: c.x - rW/2, y: c.y + rH/2, z: c.z+rD/2},
            {x: c.x - rW/2, y: c.y - rH/2, z: c.z+rD/2},
            {x: c.x - rW/2, y: c.y - rH/2, z: c.z-rD/2},
            {x: c.x - rW/2, y: c.y + rH/2, z: c.z-rD/2}
        ]
        let right = [
            {x: c.x + rW/2, y: c.y + rH/2, z: c.z+rD/2},
            {x: c.x + rW/2, y: c.y - rH/2, z: c.z+rD/2},
            {x: c.x + rW/2, y: c.y - rH/2, z: c.z-rD/2},
            {x: c.x + rW/2, y: c.y + rH/2, z: c.z-rD/2}
        ]
        let back = [
            {x: c.x - rW/2, y: c.y - rH/2, z: c.z-rD/2},
            {x: c.x + rW/2, y: c.y - rH/2, z: c.z-rD/2},
            {x: c.x + rW/2, y: c.y + rH/2, z: c.z-rD/2},
            {x: c.x - rW/2, y: c.y + rH/2, z: c.z-rD/2}
        ]
        let top = [
            {x: c.x - rW/2, y: c.y - rH/2, z: c.z+rD/2},
            {x: c.x + rW/2, y: c.y - rH/2, z: c.z+rD/2},
            {x: c.x + rW/2, y: c.y - rH/2, z: c.z-rD/2},
            {x: c.x - rW/2, y: c.y - rH/2, z: c.z-rD/2}
        ]
        let bottom = [
            {x: c.x - rW/2, y: c.y + rH/2, z: c.z+rD/2},
            {x: c.x + rW/2, y: c.y + rH/2, z: c.z+rD/2},
            {x: c.x + rW/2, y: c.y + rH/2, z: c.z-rD/2},
            {x: c.x - rW/2, y: c.y + rH/2, z: c.z-rD/2}
        ]

        let cubeFaces = [front, left, right, back, top, bottom]
        let projectedFaces = []
        for(let i=0;i<cubeFaces.length;i++){
            
            projectedFaces.push(projectVertices(orientationMatrix, cubeFaces[i]))

            let mediaIndex = i%2
            let color = i%2? 'bg-red-500 opacity-50' : 'bg-blue-500 opacity-50'
            //drawShape(projectedFaces[i], Media.list[mediaIndex].image, body, -10)
            debugShape(projectedFaces[i], 'bg-black', 1, -20, body)

        }
        //drawShape(projectedFaces[0], Media.list[2].image, body, 0)
        drawShape(projectedFaces[1], Media.list[1].image, body, -10)
        //drawShape(projectedFaces[2], Media.list[0].image, body, -10)



        
        //debugShape(projectedFaces[0], 'bg-black', 10, 30, body)

        //debugShape(front, 'bg-red-500 opacity-50', 10, -20, body)
        //debugShape(projectedVertices, 'bg-blue-500', 10, null, body)
        //debugShape(otherProjected, 'bg-green-500 opacity-50', 10, null, body)
    });

    return totalDeltaArray;
}