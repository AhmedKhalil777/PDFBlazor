# PDFBlazor
- A pdf viewer and creator for Blazor apps
- Print the razor content only using this package

## Sample

![](./1.png)
![](./2.png)

## How to use from sample
- Inject the service
```
  builder.Services.AddSingleton<PDFInterop>();
```


```
@page "/fetchdata"
@using PDFBlazor
@inject HttpClient Http
<button @onclick="() => CreatorRef.PrintPDF()">Print as pdf</button> // targeting the creation

<PDFCreator @ref="CreatorRef"> // the inside content of the pdfCreator will be printed

    <h1>Weather forecast</h1>

    <p>This component demonstrates fetching data from the server.</p>

    @if (forecasts == null)
    {
        <p><em>Loading...</em></p>
    }
    else
    {

        <table class="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                @foreach (var forecast in forecasts)
                {
                    <tr>
                        <td>@forecast.Date.ToShortDateString()</td>
                        <td>@forecast.TemperatureC</td>
                        <td>@forecast.TemperatureF</td>
                        <td>@forecast.Summary</td>
                    </tr>
                }
            </tbody>
        </table>

    }
</PDFCreator>
```






