import streamlit as st
from agric_bot import AgricultureBot
from gemini_api import GeminiAPI

# Initialize the Agriculture Bot and Agriculture API
agriculture_bot = AgricultureBot()
gemini_api = GeminiAPI()

def get_response(user_input):
    agriculture_advice = agriculture_bot.get_agricultural_advice(user_input)
    agriculture_response = gemini_api.generate_response(user_input)
    return agriculture_advice, agriculture_response

def main():
    st.set_page_config(page_title="AgriGrow Bot")

    st.markdown('<h1 style="text-align:center;">Chat with AgriGrow\'s AI 🌾</h1>', unsafe_allow_html=True)

    # Form to submit user input
    user_input = st.text_input('Enter your question or concern:')

    if st.button('Generate Response'):
        if user_input:
            agriculture_advice, agriculture_response = get_response(user_input)
            st.markdown('<h2 style="color:#228b22;font-style:italic;">Agricultural Advice:</h2>', unsafe_allow_html=True)
            st.markdown(f'<p>{agriculture_advice}</p>', unsafe_allow_html=True)

            st.markdown('<h2 style="color:#228b22;font-style:italic;">Agricultural Response:</h2>', unsafe_allow_html=True)
            st.markdown(f'<p>{agriculture_response}</p>', unsafe_allow_html=True)
        else:
            st.error("Please enter a question or describe an agricultural concern.")

    # Sidebar enhancements
    st.sidebar.markdown('<h1 style="font-size: 30px;">Menu</h1>', unsafe_allow_html=True)
    
    st.sidebar.markdown("### Navigation")
    st.sidebar.write("Use the buttons below to navigate:")
    
    if st.sidebar.button("Back to Main App"):
        st.write('<meta http-equiv="refresh" content="0;url=https://project-frontend11.onrender.com/">', unsafe_allow_html=True)
    
    if st.sidebar.button("Join Mailing List"):
        st.write('<meta http-equiv="refresh" content="0;url=https://agrigrow-signup.onrender.com/">', unsafe_allow_html=True)
    
    st.sidebar.markdown("### Resources")
    st.sidebar.markdown("[FAO](http://www.fao.org/home/en/)")
    st.sidebar.markdown("[FAO Knowledge Hub](http://www.fao.org/knowledge-hub/en/)")
    st.sidebar.markdown("[IFAD](https://www.ifad.org/)")
    st.sidebar.markdown("[Farmer's Almanac](https://www.farmersalmanac.com/)")
    st.sidebar.markdown("[AgWeb](https://www.agweb.com/)")
    st.sidebar.markdown("[Modern Farmer](https://modernfarmer.com/)")
    st.sidebar.markdown("[Ministry of Agriculture](https://statistics.kilimo.go.ke/en/)")
    st.sidebar.markdown("[KALRO](https://kalro.org/)")


if __name__ == '__main__':
    main()
