export function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.textContent = 'Welcome to AO';

    const description = document.createElement('p');
    description.textContent = ' The Hyper Parallel Super Computer';

    const button = document.createElement('button');
    button.id = 'connectWallet';
    button.textContent = 'Connect Wallet';
    button.addEventListener('click', async () => {
        if (typeof window.arweaveWallet !== 'undefined') {
            try {
                await window.arweaveWallet.connect([
                    'ACCESS_ADDRESS',
                    'SIGN_TRANSACTION'
                ]);
                alert('Wallet connected!');
            } catch (error) {
                console.error('Error connecting to wallet:', error);
            }
        } else {
            alert('ArConnect not found. Please install the ArConnect wallet extension.');
        }
    });

    const linksDiv = document.createElement('div');
    linksDiv.classList.add('links');

    const discordLink = document.createElement('a');
    discordLink.href = 'https://discord.gg/BpJBVYE9';
    discordLink.target = '_blank';
    discordLink.textContent = 'Discord';

    const twitterLink = document.createElement('a');
    twitterLink.href = 'https://x.com/aoTheComputer';
    twitterLink.target = '_blank';
    twitterLink.textContent = 'Twitter';

    const cookbookLink = document.createElement('a');
    cookbookLink.href = 'https://cookbook_ao.g8way.io/welcome/index.html';
    cookbookLink.target = '_blank';
    cookbookLink.textContent = 'Get started with AO cookbook';

    linksDiv.appendChild(discordLink);
    linksDiv.appendChild(twitterLink);
    linksDiv.appendChild(cookbookLink);

    header.appendChild(title);
    header.appendChild(description);
    header.appendChild(button);
    header.appendChild(linksDiv);

    return header;
}
