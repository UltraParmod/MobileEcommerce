// ./gradlew clean




// Flatlist very importents          ##############################################################

{/* <View>
<FlatList
  data={AllProductsApi}
  renderItem={renderItem}
  numColumns={2}
  contentContainerStyle={{
    paddingHorizontal: wp(2),
  }}
  ItemSeparatorComponent={() => (
    <View style={{ width: 0, }}></View>
  )}
  ListFooterComponent={() => (
    <View style={{ marginBottom: hp(15) }}>
    </View>
  )}
/>
</View> */}
// Flatlist very importents          ##############################################################


// .........................funcion call in input text ###################################################

// const _searchHandler=(text)=>{
//   console.log('lll')
// }
// <TextInput onChangeText={(text)=>_searchHandler(text)} placeholder='Search..' style={{padding:0,height:'100%',flex:1}} placeholderTextColor={Colors.Black}/>

// .........................funcion call in input text ###################################################









Paginaction of flatlist #########################################################################_____>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


let limit = 10;
let loadMore = true;

const App = () => {

  const [productnData, setProductsData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [showLoader,setShowLoader]=useState(false)




  const fetchData = async () => {
    let query = `?skip=${skip}&limit=${limit}`;
    try {
      let response = await axios.get('https://dummyjson.com/products' + query);
      // setProductsData(response?.data?.products);
      if(response?.data?.products?.length==0){
        loadMore=false
      }
      setProductsData([...productnData,...response?.data?.products]);
      setSkip(skip+30)

      setShowLoader(false)
    } catch (error) {
      console.log('data error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);






  const renderItem = useCallback(
    ({item}) => {
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,.3)',
            marginHorizontal: 20,
            padding: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              backgroundColor: 'black',
              width: 30,
              height: 30,
              textAlign: 'center',
              verticalAlign: 'middle',
              borderRadius: 5,
              fontWeight: 'bold',
            }}>
            {item.id}
          </Text>
          <View style={{width: '100%', height: 200, alignSelf: 'center'}}>
            <Image
              source={{uri: item.thumbnail}}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 20}}>
              Price: {item.price}
            </Text>
            <Text style={{color: 'black', fontSize: 18}}>{item.brand}</Text>
          </View>
          <Text style={{color: 'black', fontSize: 14}}>{item.description}</Text>
        </View>
      );
    },
    [productnData],
  );



  const keyExtractor = useCallback(item => `${item.id}`);
  itemSeparatorComponent = () => {
    return <View style={{height: 20}}></View>;
  };
  const onEndReached = () => {
    if (loadMore) {
      setShowLoader(true)
      fetchData()
    }
  };
  listFooterComponent=useCallback(()=>{
    return(
      <ActivityIndicator size={'large'} color={'red'} style={{marginVertical:10}}/>
    )
  },[])






  return (
     <View style={{backgroundColor: Colors.White, flex: 1}}>
      <StatusBarr backgroundColor={Colors.White} barStyle={'dark-content'} />
      <Header />

      <View>
        <FlatList
          data={productnData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={itemSeparatorComponent}
          onEndReached={onEndReached}
          ListFooterComponent={showLoader && listFooterComponent}
        />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})


  
Paginaction of flatlist #########################################################################_____>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  




