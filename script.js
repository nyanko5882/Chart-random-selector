const UI = {
    conditions: {
        pack_selector: document.getElementById('condition-packs-selector')
    }
};

function showDeveloperInfo() {
  
};

let chartData = null;
async function loadCharts() {
    try {
        const response = await fetch("data/manifest.json");
        const manifest = await response.json();
        
        chartData = await Promise.all(
            manifest.map(async (path) => {
                const response = await fetch(path);
                return await response.json();
            })
        );
    } catch (error) {
        console.error("Failed to load manifest file.")
    }

    
};
loadCharts();

function renderPackOptions() {
    chartData
};