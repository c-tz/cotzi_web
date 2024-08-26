const canvas = document.getElementById('rainbowCanvas');
const ctx = canvas.getContext('2d');

const colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
const blockHeight = 100; // Height of each block
const blockWidth = canvas.width / colors.length; // Calculate block width based on colors length
const blocks = []; // Array to hold the blocks

// Create initial blocks
for (let i = 0; i < colors.length; i++) {
    blocks.push({
        x: i * blockWidth,
        color: colors[i]
    });
}

function drawBlocks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    blocks.forEach(block => {
        ctx.fillStyle = block.color;
        ctx.fillRect(block.x, 0, blockWidth, blockHeight); // Draw each block
    });
    
    // Move blocks to the left
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].x -= 2; // Move left

        // Reset block position to the right if it goes off screen
        if (blocks[i].x < -blockWidth) {
            blocks[i].x = canvas.width; // Reset to the right side
        }
    }

    requestAnimationFrame(drawBlocks); // Call the function again for the next frame
}

// Start the animation
drawBlocks();
