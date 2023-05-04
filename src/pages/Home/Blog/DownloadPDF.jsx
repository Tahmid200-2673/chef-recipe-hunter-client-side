import React from 'react';
import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: 10,
    marginBottom: 20,
  },
});

const DownloadPDF = ({ blogData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 10 }}>
              <img src="logo.png" alt="Logo" width="50" height="50" />
            </View>
            <View>
              <View>
                <h1 style={styles.heading}>Blog Page</h1>
              </View>
            </View>
          </View>
          {blogData.map((blog) => (
            <View style={styles.card} key={blog.id}>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default DownloadPDF;
