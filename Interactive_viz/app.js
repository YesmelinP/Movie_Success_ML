// Build the metadata panel
// function to build both charts
function buildCharts(option) {
    d3.csv(option.csv_url).then((data) => {
        console.log(data);
        // Parse the data
        const names = data.slice(0, 20).map(row => row.star_1);
        const values = data.slice(0, 20).map(row => +row.number_of_stars); // Convert to number

        // Create the bar chart
        const trace = {
            x: names,
            y: values,
            type: 'bar'
        };

        const layout = {
            title: 'Number of movies by Actor',
            xaxis: { title: 'Actor' },
            yaxis: { title: 'Number of Stars' },
            width: '100%'
        };

        Plotly.newPlot('bar', [trace], layout);
    });
}


// Use d3 to select the dropdown with id of `#selDataset`
function setupDropdown(options) {
    let dropdown = d3.select("#selDataset");
    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        dropdown.append("option").text(option.title).property("value", option.id);
    }
}

// Function to run on page load
function init() {
    // Use d3 to set up the dropdown

    setupDropdown(dataSetsOptions)
    buildCharts(dataSetsOptions[0]);
}

// Function for event listener
function optionChanged(option_id) {
    // Build charts and metadata panel each time a new sample is selected
    console.log(option_id);
    const optionFound = dataSetsOptions.find((element) => element.id == option_id);
    console.log(optionFound);
    buildCharts(optionFound);
}


const dataSetsOptions = [
    {
        id: 1,
        title: "Actors and movies participation",
        csv_url: "./spark_query1.csv/first_query.csv"
    },
    {
        id: 2,
        title: "Other example",
        csv_url: "./spark_query1.csv/first_query.csv"
    }
];

// Initialize the dashboard
init();