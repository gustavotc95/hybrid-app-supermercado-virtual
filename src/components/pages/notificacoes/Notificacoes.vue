<template>
  <div class="notificacoes-content">
    <div class="notificacoes container">
      <div class="notificacoes-item shadow-small" v-for="(notification, index) in notifications" :key="index">
        <router-link :to="{ name: 'notificação', params: { notification: notification} }">
          <span class="nome">{{ notification.title }}</span>
          <span class="icon arrow-icon">
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notifications: [
        {
          'title': 'Lorem ipsum dolor sit',
          'link': '/#/ofertas', // TODO: Fiz assim, pois não sei como vai vir da api
          'message': `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis bibendum neque vel congue. Curabitur dapibus bibendum pharetra. Praesent porttitor nec arcu id maximus. Fusce orci neque, malesuada et ex a, cursus tincidunt eros. Mauris dignissim id velit ac lobortis. Pellentesque ullamcorper velit sapien, vel interdum lorem porta id. Vestibulum in feugiat ante. Praesent eu est ultrices, bibendum metus ac, elementum nisi. Vivamus vulputate dui et ante auctor malesuada. Curabitur suscipit tincidunt ex, quis efficitur est imperdiet vitae. Vivamus efficitur sem sed turpis viverra posuere.</p>
            <p>Nullam sagittis venenatis justo. Fusce eu nibh in velit scelerisque porta eget dictum diam. Integer a justo a orci lacinia maximus. Suspendisse bibendum sagittis mollis. Duis fermentum felis ut ipsum vehicula, ac hendrerit leo cursus. Mauris lobortis est at felis hendrerit, nec tempus mauris sodales. Vestibulum malesuada justo eu leo dignissim, quis aliquet dolor accumsan. Aenean sem augue, lobortis bibendum tristique id, pulvinar consequat mauris. Sed a sapien erat. Quisque condimentum, orci in mattis vulputate, tortor ante ornare ante, ac ultrices leo sem et felis. Proin porta metus eget magna molestie, iaculis vulputate mi fringilla.</p>
            <p>Duis rhoncus velit ante, vel facilisis velit aliquet eget. Vivamus elementum felis sit amet risus sodales, nec luctus sapien viverra. Curabitur eget leo fringilla, vestibulum dolor vitae, dictum dui. Sed nunc ipsum, tempor sit amet massa lobortis, aliquet tristique est. Mauris pretium iaculis ex bibendum laoreet. Etiam ullamcorper laoreet elementum. Suspendisse potenti. Etiam id porta risus, et interdum turpis. Praesent fermentum tellus vitae commodo consequat. Aenean ut augue vitae neque condimentum venenatis. Donec ultricies interdum ipsum quis maximus. Morbi pulvinar consectetur diam, sit amet tristique massa ultrices ut. Morbi mollis eleifend pellentesque. Curabitur consequat, ipsum ac porttitor porttitor, sapien mi mattis mi, sed gravida est nunc sed massa. Cras tempor posuere laoreet. Cras sed dapibus nulla, quis aliquet neque.</p>`
        },
        {
          'title': 'Nullam sagittis venenatis',
          'link': '/#/departamentos/cereais/Amendoim%20e%20canjica',
          'message': `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis bibendum neque vel congue. Curabitur dapibus bibendum pharetra. Praesent porttitor nec arcu id maximus. Fusce orci neque, malesuada et ex a, cursus tincidunt eros. Mauris dignissim id velit ac lobortis. Pellentesque ullamcorper velit sapien, vel interdum lorem porta id. Vestibulum in feugiat ante. Praesent eu est ultrices, bibendum metus ac, elementum nisi. Vivamus vulputate dui et ante auctor malesuada. Curabitur suscipit tincidunt ex, quis efficitur est imperdiet vitae. Vivamus efficitur sem sed turpis viverra posuere.</p>
            <p>Nullam sagittis venenatis justo. Fusce eu nibh in velit scelerisque porta eget dictum diam. Integer a justo a orci lacinia maximus. Suspendisse bibendum sagittis mollis. Duis fermentum felis ut ipsum vehicula, ac hendrerit leo cursus. Mauris lobortis est at felis hendrerit, nec tempus mauris sodales. Vestibulum malesuada justo eu leo dignissim, quis aliquet dolor accumsan. Aenean sem augue, lobortis bibendum tristique id, pulvinar consequat mauris. Sed a sapien erat. Quisque condimentum, orci in mattis vulputate, tortor ante ornare ante, ac ultrices leo sem et felis. Proin porta metus eget magna molestie, iaculis vulputate mi fringilla.</p>
            <p>Duis rhoncus velit ante, vel facilisis velit aliquet eget. Vivamus elementum felis sit amet risus sodales, nec luctus sapien viverra. Curabitur eget leo fringilla, vestibulum dolor vitae, dictum dui. Sed nunc ipsum, tempor sit amet massa lobortis, aliquet tristique est. Mauris pretium iaculis ex bibendum laoreet. Etiam ullamcorper laoreet elementum. Suspendisse potenti. Etiam id porta risus, et interdum turpis. Praesent fermentum tellus vitae commodo consequat. Aenean ut augue vitae neque condimentum venenatis. Donec ultricies interdum ipsum quis maximus. Morbi pulvinar consectetur diam, sit amet tristique massa ultrices ut. Morbi mollis eleifend pellentesque. Curabitur consequat, ipsum ac porttitor porttitor, sapien mi mattis mi, sed gravida est nunc sed massa. Cras tempor posuere laoreet. Cras sed dapibus nulla, quis aliquet neque.</p>`
        },
        {
          'title': 'Duis rhoncus velit ante',
          'link': '/departamentos/',
          'message': `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis bibendum neque vel congue. Curabitur dapibus bibendum pharetra. Praesent porttitor nec arcu id maximus. Fusce orci neque, malesuada et ex a, cursus tincidunt eros. Mauris dignissim id velit ac lobortis. Pellentesque ullamcorper velit sapien, vel interdum lorem porta id. Vestibulum in feugiat ante. Praesent eu est ultrices, bibendum metus ac, elementum nisi. Vivamus vulputate dui et ante auctor malesuada. Curabitur suscipit tincidunt ex, quis efficitur est imperdiet vitae. Vivamus efficitur sem sed turpis viverra posuere.</p>
            <p>Nullam sagittis venenatis justo. Fusce eu nibh in velit scelerisque porta eget dictum diam. Integer a justo a orci lacinia maximus. Suspendisse bibendum sagittis mollis. Duis fermentum felis ut ipsum vehicula, ac hendrerit leo cursus. Mauris lobortis est at felis hendrerit, nec tempus mauris sodales. Vestibulum malesuada justo eu leo dignissim, quis aliquet dolor accumsan. Aenean sem augue, lobortis bibendum tristique id, pulvinar consequat mauris. Sed a sapien erat. Quisque condimentum, orci in mattis vulputate, tortor ante ornare ante, ac ultrices leo sem et felis. Proin porta metus eget magna molestie, iaculis vulputate mi fringilla.</p>
            <p>Duis rhoncus velit ante, vel facilisis velit aliquet eget. Vivamus elementum felis sit amet risus sodales, nec luctus sapien viverra. Curabitur eget leo fringilla, vestibulum dolor vitae, dictum dui. Sed nunc ipsum, tempor sit amet massa lobortis, aliquet tristique est. Mauris pretium iaculis ex bibendum laoreet. Etiam ullamcorper laoreet elementum. Suspendisse potenti. Etiam id porta risus, et interdum turpis. Praesent fermentum tellus vitae commodo consequat. Aenean ut augue vitae neque condimentum venenatis. Donec ultricies interdum ipsum quis maximus. Morbi pulvinar consectetur diam, sit amet tristique massa ultrices ut. Morbi mollis eleifend pellentesque. Curabitur consequat, ipsum ac porttitor porttitor, sapien mi mattis mi, sed gravida est nunc sed massa. Cras tempor posuere laoreet. Cras sed dapibus nulla, quis aliquet neque.</p>`
        },
        {
          'title': 'Vel facilisis velit aliquet eget. Vivamus elementum felis sit amet',
          'link': '',
          'message': `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis bibendum neque vel congue. Curabitur dapibus bibendum pharetra. Praesent porttitor nec arcu id maximus. Fusce orci neque, malesuada et ex a, cursus tincidunt eros. Mauris dignissim id velit ac lobortis. Pellentesque ullamcorper velit sapien, vel interdum lorem porta id. Vestibulum in feugiat ante. Praesent eu est ultrices, bibendum metus ac, elementum nisi. Vivamus vulputate dui et ante auctor malesuada. Curabitur suscipit tincidunt ex, quis efficitur est imperdiet vitae. Vivamus efficitur sem sed turpis viverra posuere.</p>
            <p>Nullam sagittis venenatis justo. Fusce eu nibh in velit scelerisque porta eget dictum diam. Integer a justo a orci lacinia maximus. Suspendisse bibendum sagittis mollis. Duis fermentum felis ut ipsum vehicula, ac hendrerit leo cursus. Mauris lobortis est at felis hendrerit, nec tempus mauris sodales. Vestibulum malesuada justo eu leo dignissim, quis aliquet dolor accumsan. Aenean sem augue, lobortis bibendum tristique id, pulvinar consequat mauris. Sed a sapien erat. Quisque condimentum, orci in mattis vulputate, tortor ante ornare ante, ac ultrices leo sem et felis. Proin porta metus eget magna molestie, iaculis vulputate mi fringilla.</p>
            <p>Duis rhoncus velit ante, vel facilisis velit aliquet eget. Vivamus elementum felis sit amet risus sodales, nec luctus sapien viverra. Curabitur eget leo fringilla, vestibulum dolor vitae, dictum dui. Sed nunc ipsum, tempor sit amet massa lobortis, aliquet tristique est. Mauris pretium iaculis ex bibendum laoreet. Etiam ullamcorper laoreet elementum. Suspendisse potenti. Etiam id porta risus, et interdum turpis. Praesent fermentum tellus vitae commodo consequat. Aenean ut augue vitae neque condimentum venenatis. Donec ultricies interdum ipsum quis maximus. Morbi pulvinar consectetur diam, sit amet tristique massa ultrices ut. Morbi mollis eleifend pellentesque. Curabitur consequat, ipsum ac porttitor porttitor, sapien mi mattis mi, sed gravida est nunc sed massa. Cras tempor posuere laoreet. Cras sed dapibus nulla, quis aliquet neque.</p>`
        }
      ]
    }
  }
}
</script>
