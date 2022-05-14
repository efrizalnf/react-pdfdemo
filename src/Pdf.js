import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        // flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        flexWrap: 'nowrap',
    },
    section: {
        // margin: 10,
        // padding: 10,
        // flexGrow: 1
        zIndex: 0,
    }
    
    
});

// Create Document Component
const Pdf = () => (
    <Document>
        <Page size="A4" style={styles.page} pageNumber={1}>
            <View style={styles.section}>
                <Image src='./sk_yayasan.jpg'/>
            </View>
        </Page>
    </Document>
);

export default Pdf;