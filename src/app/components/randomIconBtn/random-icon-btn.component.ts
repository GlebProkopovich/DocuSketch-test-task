import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-random-icon-btn',
  templateUrl: './random-icon-btn.component.html',
  styleUrls: ['./random-icon-btn.component.scss'],
})
export class RandomIconBtnComponent {
  randomIcon!: IconDefinition;

  generateRandomIcon(): void {
    setTimeout(() => {
      const allIcons: IconDefinition[] = [
        faRandom,
        ...Object.values(fas),
        ...Object.values(far),
        ...Object.values(fab),
      ];

      const randomIndex = Math.floor(Math.random() * allIcons.length);
      this.randomIcon = allIcons[randomIndex];
    }, 3000);
  }
}
