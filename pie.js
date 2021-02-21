    anychart.onDocumentReady(function () {

        var chart = anychart.pie([
            ["San-Francisco (1906)", 1500],
            ["Messina (1908)", 87000],
            ["Ashgabat (1948)", 175000],
            ["Chile (1960)", 10000],
            ["Tian Shan (1976)", 242000],
            ["Armenia (1988)", 25000],
            ["Iran (1990)", 50000]
        ]);

        chart
            .title("The deadliest earthquakes in the XXth century")
            .radius('43%')
            .innerRadius('30%');
        chart.container('container-pie');
        chart.draw();
    }   );
