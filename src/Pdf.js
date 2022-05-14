import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        // flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        flexWrap: 'nowrap',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
    
    
});

// Create Document Component
const Pdf = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View >
            
                <Image src='./sk_yayasan.jpg'/>
              
            </View>
            
        </Page>
    </Document>
);

export default Pdf;