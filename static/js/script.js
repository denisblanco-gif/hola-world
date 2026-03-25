document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const greetBtn = document.getElementById('greetBtn');
    const greetingDisplay = document.getElementById('greetingDisplay');

    const fetchGreeting = async () => {
        const name = nameInput.value.trim();
        if (!name) return;

        try {
            const response = await fetch('/greet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });

            const data = await response.json();
            
            // Clear current message if any
            greetingDisplay.classList.remove('show');
            
            setTimeout(() => {
                greetingDisplay.textContent = data.message;
                greetingDisplay.classList.add('show');
            }, 300);

        } catch (error) {
            console.error('Error fetching greeting:', error);
            greetingDisplay.textContent = 'Something went wrong. Please try again.';
            greetingDisplay.classList.add('show');
        }
    };

    greetBtn.addEventListener('click', fetchGreeting);

    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            fetchGreeting();
        }
    });

    // Initial focus
    nameInput.focus();
});
