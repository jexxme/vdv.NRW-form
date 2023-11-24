import streamlit as st
import matplotlib.pyplot as plt

# Streamlit app title
st.title('Kostenberechnung und Visualisierung für Dokumentenversand')

# Input fields
vollkostensatz_sachbearbeiter = st.number_input('Vollkostensatz für Sachbearbeiter (€/h)', value=47.5)
anfragen_pro_monat = st.number_input('Anzahl der Anfragen pro Monat', value=50, format="%d")
spezialfälle_pro_woche = st.number_input('Anzahl der Spezialfälle pro Woche', value=10, format="%d")
fehlzustellungen_pro_jahr = st.number_input('Anzahl der Fehlzustellungen pro Jahr', value=50, format="%d")
kosten_pro_fehlzustellung = st.number_input('Kosten pro Fehlzustellung (€)', value=1.60)
kosten_fehlzustellungen_jährlich = 80

# Constants
dauer_bearbeitung_anfrage = 5 / 60  # 5 Minuten in Stunden
dauer_bearbeitung_spezialfall = 15 / 60  # 15 Minuten in Stunden
wochen_im_monat = 4  # Durchschnittlich 4 Wochen pro Monat

# Kostenberechnung
def calculate_costs():
    kosten_normale_anfragen_monatlich = anfragen_pro_monat * dauer_bearbeitung_anfrage * vollkostensatz_sachbearbeiter
    kosten_spezialfälle_monatlich = spezialfälle_pro_woche * wochen_im_monat * dauer_bearbeitung_spezialfall * vollkostensatz_sachbearbeiter
    kosten_fehlzustellungen_jährlich = fehlzustellungen_pro_jahr * kosten_pro_fehlzustellung
    gesamtkosten_monatlich = kosten_normale_anfragen_monatlich + kosten_spezialfälle_monatlich
    gesamtkosten_jährlich = gesamtkosten_monatlich * 12 + kosten_fehlzustellungen_jährlich
    return gesamtkosten_monatlich, gesamtkosten_jährlich

if st.button('Berechne Kosten'):
    monatlich, jährlich = calculate_costs()
    st.write(f"Monatliche Gesamtkosten: €{monatlich:.2f}")
    st.write(f"Jährliche Gesamtkosten: €{jährlich:.2f}")

    # Bar Chart for Monthly vs. Yearly Costs
    st.subheader("Monatliche vs. Jährliche Kosten")
    fig, ax = plt.subplots()
    ax.bar(["Monatlich", "Jährlich"], [monatlich, jährlich], color=['blue', 'green'])
    plt.ylabel('Kosten in €')
    st.pyplot(fig)

    # Pie Chart for Cost Breakdown
    st.subheader("Kostenaufteilung")
    labels = ['Normale Anfragen', 'Spezialfälle', 'Fehlzustellungen']
    sizes = [
        anfragen_pro_monat * dauer_bearbeitung_anfrage * vollkostensatz_sachbearbeiter,
        spezialfälle_pro_woche * wochen_im_monat * dauer_bearbeitung_spezialfall * vollkostensatz_sachbearbeiter,
        kosten_fehlzustellungen_jährlich / 12  # Monthly equivalent
    ]
    fig1, ax1 = plt.subplots()
    ax1.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90)
    ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
    st.pyplot(fig1)
