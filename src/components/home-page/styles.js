const styles = {
    banner: {
        backgroundColor: 'primary.main',
        padding: {
            xs: '20px 0px',
            md: '90px 0px',
        },
    },
    bannerTitle: {
        fontSize: {
            xs: '25px',
            md: '60px',
        },
        fontWeight: {
            xs: 500,
            md: 700,
        },
        textAlign: {
            xs: 'center',
            md: 'left'
        },
        color: 'white',
        lineHeight: {
            xs: '35px',
            md: '70px',
        },
    },
    bannerSubTitle: {
        fontSize: {
            xs: '18px',
            md: '24px',
        },
        fontWeight: {
            xs: 200,
            md: 300,
        },
        textAlign: {
            xs: 'center',
            md: 'left'
        },
        color: '#e0e0e0',
        marginTop: {
            xs: '2px',
            md: '5px',
        },
    },
    topicListBox: {
        display: 'flex',
        justifyContent: {
            xs: 'center',
            md: 'left',
        },
    },
    topicList: {
        marginTop: {
            xs: '5px',
            md: '10px',
        },
        color: '#e0e0e0',
    },
    topicListItem: {
        padding: {
            xs: '0px 4px',
            md: '8px 16px',
        },
    },
    listItemIcon: {
        color: '#f9a825',
        minWidth: '35px',
    },
    registerBtnContainer: {
        display: 'flex',
        justifyContent: {
            xs: 'center',
            md: 'left',
        },
        padding: {
            xs: '0px 4px',
            md: '8px 16px',
        },
        marginBottom: {
            xs: '30px',
            md: '0px',
        },
    },
    registerBtn: {
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: '#3c52b2',
        },
    },
    bannerImg: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    }
}
export default styles;