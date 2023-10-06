var rotationAngle = 0; // Initial rotation angle
var rotationSpeed = 2; // Adjust the speed of rotation
var rotationAnimationId; // To keep track of the animation frame ID

var planet = document.getElementById('planet');

planet.addEventListener('mouseenter', startRotation);
planet.addEventListener('mouseleave', stopRotation);

function startRotation() {
    rotatePlanet();
}

function stopRotation() {
    cancelAnimationFrame(rotationAnimationId);
}

function rotatePlanet() {
    function rotate() {
        rotationAngle += rotationSpeed;
        planet.style.transform = 'rotate(' + rotationAngle + 'deg)';
        rotationAnimationId = requestAnimationFrame(rotate);
    }

    rotate();
}


