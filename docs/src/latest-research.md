---
sidebar: auto
---

# The Latest Research from SNOWCOP

Is it impossible? Let's see! Here the latest news from SNOWCOP.

## Assessing Cloud-Free High-Resolution Satellite Data Availability Across the Extra-Tropical Andes

In this exploratory analysis, we assessed the availability of **high-resolution, cloud-free satellite imagery** across the Andes on a pixel-wise basis over a complete hydrological year. The key metric used was the **percentage of available and usable (i.e., cloud-free) observations**.

**Datasets**

The analysis included data from the following missions:

* **Sentinel-2A** (launched in 2015) and **Sentinel-2B** (launched in 2017)

* **Landsat-5** (1984–2013), **Landsat-7** (1999–2024), **Landsat-8** (from 2013), and **Landsat-9** (from 2021)

**Cloud Detection Method**

Cloud-free observations were identified using the **Fmask algorithm**. However, Fmask is known to be overly conservative in snow-covered regions, often misclassifying snow as cloud (e.g., see [Wright et al., 2024][W2024]). This leads to an underestimation of usable observations, particularly in high-elevation areas where snow persists for much of the year.

**Results and Observations**

![DataAva](/images/DataAva.png)

The visualization employs a **color scale from 0 to 50%**, corresponding to a maximum of approximately one usable image every two days over the year.

The analysis highlights **2013 as the worst year on record** for the number of high-resolution optical acquisitions across the entire domain—reflecting the transition between Landsat-7 degradation and the early stages of Landsat-8 operations.

In contrast, since **2021, the combined use of Landsat-8, Landsat-9, and Sentinel-2 missions has resulted in a major improvement in data availability**. This synergy now provides, on average, one high-resolution, cloud-free image every three days across large parts of the Andes.

A particularly **well-covered central Andean band** stands out, characterized by more frequent cloud-free acquisitions. Within this region, basins such as Río Maipo, Río Cachapoal, Río Tinguiririca, Río Teno, Río Maule, upper Río Mendoza, Río Ñuble, and Río Colorado exhibit the highest coverage.

**Integrating Multi-Resolution Data**

Despite this progress, the **temporal density of high-resolution (HR) optical data remains insufficient to adequately sample snow dynamics across the Andes**, especially over the past two decades.
In **Nyquist–Shannon terms**, the available HR data do not meet the sampling frequency required to fully capture snow cover variability.

To address this limitation, the SNOWCOP project employs a **novel approach that integrates high- and low-resolution (LR) snow cover datasets** [(Premier et al., 2021)][P2021]. This method leverages spatiotemporal correlations driven by topographic and meteorological factors to enhance temporal continuity and spatial completeness.

The approach identifies **recurring interannual snow cover patterns** linked to local environmental conditions through multi-temporal analyses of long historical HR time series—where longer archives strengthen pattern detection and model robustness. These identified patterns can then be exploited during periods of sparse HR observations, such as 2013.

Of course, the accuracy of the low-resolution snow cover fraction remains a critical factor for ensuring reliable results.

Stay tuned for further insights into this integrative framework and its applications for **snow monitoring in the Andes within SNOWCOP**.

[W2024]: https://www.sciencedirect.com/science/article/pii/S0034425724001330
[P2021]: https://ieeexplore.ieee.org/document/9511108

## Can Glacier Runoff Be Modeled Using a Few Stations and Satellite Multispectral Data? 

One of the key objectives of the SNOWCOP project is to accurately quantify glacier melt rates and distinguish between snow and ice contributions. To explore this, we focused on a glacier on **Volcán Azufre** (see Figure below), an ideal study site due to: 

* Limited evaporation and sublimation, reducing uncertainty in water loss;

* The presence of three nearby automatic air temperature stations (marked in pink in the figure); 

* A downstream gauge station at the basin outlet providing discharge measurements.

![Azufre](/images/azufre.png)

We modeled glacier melt using a **temperature index (TI)** and an **enhanced temperature index (ETI)** method, where the ETI incorporated shortwave radiation. This radiation was estimated by scaling potential insolation with an empirical coefficient that varied with daily temperature range. Land cover classification, obtained from Sentinel-2 imagery, was temporally interpolated to fill gaps in satellite coverage.

To calibrate the model coefficients, we used discharge measurements from a period without liquid precipitation, assuming melt was the sole source of runoff. **The figure below presents the observed discharge alongside the outputs from the TI and ETI models.** The comparison highlights how, at high altitudes, temperature alone does not always correlate well with melt rates. The incorporation of shortwave incoming radiation in the ETI model significantly improves melt reconstruction. 

![Horcones](/images/plot_azufre.png)

This preliminary analysis demonstrates that, even with limited station data and satellite-derived land cover maps, it is possible to estimate glacier runoff. Moreover, our findings suggest that an ETI model can enhance runoff estimation even without on-site radiometers. **This raises a key question: to achieve accurate glacier meltwater estimation in the extra-tropical Andes, what level of model complexity provides the best balance between precision and regional applicability?**

## IANIGLA Field Research in the Horcones Valley

The IANIGLA SNOWCOP partners recently concluded their third and final winter campaign of 2024 in the Horcones Valley. This crucial phase involved retrieving valuable data and instruments, including a Snowfox cosmic ray sensor, an ultrasound sensor, and a pluviometer, which were initially installed in early September 2024.

The primary objective of this campaign was to conduct a direct comparison between the daily and hourly snow measurements obtained from the newly acquired Snowfox sensor and the data collected by other instruments already in place at the Horcones site. These existing instruments are part of the nivo-meteorological station managed by the Departamento General de Irrigación (DGI) since the year 2000.


![Horcones](/images/Horcones.png)

Credit: CONICET IANIGLA

The Snowfox was installed in Horcones (3040 m asl) for field testing on 5 September 2024, with 42 cm snow. The site was revisited on 28 September 2024 after a snowstorm, and the site reported 50 cm snow. The sensors were finally removed from the site on 21 October 2024, when the snow height sensor – ultrasound recorded 0 cm snow. Initial testing of data indicates that SWE agrees within an uncertainty range of 23 mm w.e. and shows the same pattern as Horcones DGI snow scale. The first conversion tests were performed without a local reference station. The higher SWE (<20 mm w.e.) after 10 October could be due to soil moisture.

![Horcones_plot](/images/Horcones_plot.png)
Credit: CONICET IANIGLA

Despite the short period available for comparison (the sensors were not available earlier due to bureaucratic and logistical complications), the Snowfox and the snow scale SWE data show remarkable similarities. We will need however, further testing and calibration to accommodate for local conditions, etc. 

A special thanks goes out to the dedicated team involved in this campaign: Lucas Ruiz, Juan Cruz Ghilardi, Antoine Rabatel, Lise Chantelauze, and Mariano Masiokas! 🙏

## KO meeting

On October 23rd and 24th the kick-off of the EU Horizon Europe funded project SNOWCOP took place.

![KO_photo](/images/kickoff_snowcop_groupphoto.jpg)
Credit: Eurac Research | Andrea De Giovanni
