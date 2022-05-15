import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        flexWrap: 'nowrap',
        fontFamily: 'Times-Roman',
        fontSize: 12,
        color: '#000000',
    },
    section: {
        position: 'relative',
        zIndex: -1,
    },

    no_sk: {
        position: 'absolute',
        left:132,
        top:199,
    },
    tgl_surat: {
        position: 'absolute',
        right: 82,
        top: 199,
    },
    nama_sk: {
        position: 'absolute',
        left: 199,
        top: 267,
    },
    nama_sk_p1: {
        position: 'absolute',
        left: 295,
        top: 408,
    },
    tgl_kesanggupan_p1: {
        position: 'absolute',
        right: 89,
        top: 408,
    },
    jenjang_sk_p1: {
        position: 'absolute',
        right: 175,
        top: 428,
    },
    jenjang_sk_p2: {
        position: 'absolute',
        right: 99,
        top: 449,
    },
    tgl_sk_p4: {
        position: 'absolute',
        left: 205,
        bottom: 372,
    },
    nama_sk_p4: {
        position: 'absolute',
        left: 320,
        bottom: 351,
        fontWeight: 'bold',
    },
    jenjang_sk_p4: {
        position: 'absolute',
        left: 139,
        bottom: 331,
    },
    
    
});

// Create Document Component
const Pdf = () => (
    <Document>
        <Page size="Legal" style={styles.page} pageNumber={1}>
            <View >
                <Text style={styles.no_sk}>
                    1418-69/A.3-YAPINDA/VII/2018
                </Text>
                <Text style={styles.tgl_surat}>
                    19 April 2018
                </Text>
                <Text style={styles.nama_sk}>
                    Desy Sri Asih, S.Pd
                </Text>
                <Text style={styles.nama_sk_p1}>
                    Desy Sri Asih, S.Pd
                </Text>
                <Text style={styles.tgl_kesanggupan_p1}>
                    28 Juni 2018
                </Text>
                <Text style={styles.jenjang_sk_p1}>
                    MA Nurul Huda
                </Text>
                <Text style={styles.jenjang_sk_p2}>
                    MA Nurul Huda
                </Text>
                <Text style={styles.tgl_sk_p4}>
                    1 Juli 2018
                </Text>
                <Text style={styles.nama_sk_p4}>
                    Desy Sri Asih, S.Pd
                </Text>
                <Text style={styles.jenjang_sk_p4}>
                    MA Nurul Huda
                </Text>
                <Image src='./sk_yayasan.jpg' style={styles.section}/>
            </View>
        </Page>
    </Document>
);

export default Pdf;