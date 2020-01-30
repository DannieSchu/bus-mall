import { initializeState } from '../app.js';


const productVotes = JSON.parse(localStorage.getItem('votes'));

const votes = [];
const labels = [];

productVotes.forEach(item => {
    votes.push(item.votes);
    labels.push(item.id);
});

const ctx = document.getElementById('chart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: votes,
            backgroundColor: ['lightBlue', 'lightRed', 'yellow', 'lightGreen', 'white', 'pink']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
    window.location = '../';
    initializeState();
});