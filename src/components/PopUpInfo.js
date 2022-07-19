import {View} from 'react-natie'

// pop up content

// posso chamar só a key ou id para chamar o dados do filme e chamar direto da api daqui ???
export default function PopUpInfo(props) {
    
    return(
        <View style={{flex:1}}>
            <View>
                <Image
                    src={"https://image.tmdb.org/t/p/w500"+img}
                />
                <View>
                    {/* name,desc and link */}
                </View>
            </View>
            <View>
                <Text>
                    {/* descr */}
                </Text>
            </View>
        </View>
    )
}