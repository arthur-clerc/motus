document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'login.html';
    }

    try {
        const response = await fetch('/api/game/word', {
            headers: {
                'x-auth-token': token
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch word');
        }

        const data = await response.json();
        const word = data.word;
        console.log(word);
    } catch (error) {
        console.error(error);
    }
});
